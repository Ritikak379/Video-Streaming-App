package com.stream.app;

import com.stream.app.services.VideoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringStreamBackendApplicationTests {
	@Autowired
	VideoService videoService;

	@Test
	void contextLoads() {
//		videoService.processVideo("e71b58e6-9ee0-487e-8c46-49bd4013f06d");

	}

}
