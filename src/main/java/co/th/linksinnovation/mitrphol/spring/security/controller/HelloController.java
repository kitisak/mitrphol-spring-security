/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.th.linksinnovation.mitrphol.spring.security.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jirawong Wongdokpuang <jirawong@linksinnovation.com>
 */
@RestController
public class HelloController {
    
    @RequestMapping("/api/hello")
    String get(){
        return "hello, world";
    }
    
    @PreAuthorize("#oauth2.hasScope('global')")
    @RequestMapping("/api/secured")
    String getSecured(){
        return "hello, world secured";
    }
}
