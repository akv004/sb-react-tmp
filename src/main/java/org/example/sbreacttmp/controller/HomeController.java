package org.example.sbreacttmp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/react")
    public String reactPage() {
        // Return a Thymeleaf template that includes a reference to the React bundle
        return "reactPage";
    }
}