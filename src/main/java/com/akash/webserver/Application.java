package com.akash.webserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.akash.webserver.sync.DeviceManager;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
    	Thread deviceManagerThread = new Thread(new DeviceManager());
    	deviceManagerThread.start();
        SpringApplication.run(Application.class, args);
    }
   
}