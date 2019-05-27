package com.akash.webserver;

import org.springframework.web.bind.annotation.RestController;

import com.akash.webserver.sync.DeviceManager;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class RestCont {

	@RequestMapping("/getDevice/{id}")
	public String index(@PathVariable String id) {

		String state = DeviceManager.getDeviceState(id);

		return state;
	}

}