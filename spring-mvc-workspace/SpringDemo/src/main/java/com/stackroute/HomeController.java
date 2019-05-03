package com.stackroute;
import com.stackroute.HomeController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomeController {
@PostMapping("/save")
    public ModelAndView getHello(HttpServletRequest a){
        String str= a.getParameter("t1");

    ModelAndView mv = new ModelAndView("display");
    mv.addObject("a",str);
    return mv;
    }
}
