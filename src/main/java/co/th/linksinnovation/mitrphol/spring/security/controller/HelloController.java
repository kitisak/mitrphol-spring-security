/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.th.linksinnovation.mitrphol.spring.security.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jirawong Wongdokpuang <jirawong@linksinnovation.com>
 */
@RestController
public class HelloController {
    
    private Logger log = LoggerFactory.getLogger(HelloController.class);
    
    @CrossOrigin(origins = "http://localhost:8000")
    @RequestMapping("/api/hello")
    String get(){
        log.warn("Test {}", "haha");
        return "hello, world";
    }
    
    @RequestMapping("/api/secured")
    String getSecured(@AuthenticationPrincipal String user){
        log.debug("Authen user {}",user);
        return "hello, world secured";
    }
}
