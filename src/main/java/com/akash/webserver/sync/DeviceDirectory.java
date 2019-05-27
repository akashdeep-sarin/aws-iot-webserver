package com.akash.webserver.sync;

import java.util.Collection;
import java.util.HashMap;

import com.amazonaws.services.iot.client.AWSIotDevice;

public class DeviceDirectory {

    private static HashMap<String, AWSIotDevice> deviceMap;

    static {
        deviceMap = new HashMap<String, AWSIotDevice>();
    }

    static void createNewDevice(String deviceName) {
        AWSIotDevice device = new AWSIotDevice(deviceName);
        deviceMap.put(deviceName, device);
    }

    static AWSIotDevice getDevice(String deviceName) {
        return deviceMap.get(deviceName);
    }

    static Collection<AWSIotDevice> getList() {
        return deviceMap.values();
    }

}
