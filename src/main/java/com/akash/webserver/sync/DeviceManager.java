package com.akash.webserver.sync;

import java.util.Date;
import java.util.Iterator;

import com.akash.webserver.util.Utility;
import com.akash.webserver.util.Utility.KeyStorePasswordPair;
import com.amazonaws.services.iot.client.AWSIotDevice;
import com.amazonaws.services.iot.client.AWSIotException;
import com.amazonaws.services.iot.client.AWSIotMqttClient;

public class DeviceManager implements Runnable {

	private static AWSIotMqttClient awsIotClient;

	public static void setClient(AWSIotMqttClient client) {
		awsIotClient = client;
	}

	private static void initClient() {
		String clientEndpoint = Utility.getConfig("clientEndpoint");
		String clientId = Utility.getConfig("clientId");

		String certificateFile = Utility.getConfig("certificateFile");
		String privateKeyFile = Utility.getConfig("privateKeyFile");

		if (awsIotClient == null && certificateFile != null && privateKeyFile != null) {
			KeyStorePasswordPair pair = Utility.getKeyStorePasswordPair(certificateFile, privateKeyFile, null);
			awsIotClient = new AWSIotMqttClient(clientEndpoint, clientId, pair.keyStore, pair.keyPassword);
		}

		if (awsIotClient == null) {
			throw new IllegalArgumentException("Failed to construct client due to missing certificate or credentials.");
		}
	}

	public static String getDeviceState(String deviceName) {
		String shadowState = null;

		try {
			// Retrieve updated document from the shadow
			shadowState = DeviceDirectory.getDevice(deviceName).get();
			System.out.println("Device Id: "+ deviceName +" : "+  new Date().toString() + " : <<< " + shadowState);

		} catch (AWSIotException e) {
			System.out.println(System.currentTimeMillis() + ": get failed for " + deviceName);
		}

		return shadowState;
	}

	public void run() {
		initClient();

		String thingNames = Utility.getConfig("thingNames");

		String[] thingArray = thingNames.split(",");

		for (int i = 0; i < thingArray.length; i++) {
			System.out.println("Adding Device " + thingArray[i]);
			DeviceDirectory.createNewDevice(thingArray[i].trim());
		}

		Iterator<AWSIotDevice> itr = DeviceDirectory.getList().iterator();

		while (itr.hasNext()) {
			try {
				awsIotClient.attach(itr.next());
			} catch (AWSIotException e) {
				e.printStackTrace();
			}
		}

		try {
			awsIotClient.connect();
		} catch (AWSIotException e1) {
			e1.printStackTrace();
		}
	}
}
