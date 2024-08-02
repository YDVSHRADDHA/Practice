import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./About.css"
gsap.registerPlugin(ScrollTrigger);

const About2 = () => {
  useEffect(() => {
    // Banner Big Image
    gsap.to("#bannerBigimg", {
      duration: 2,
      yPercent: 150,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });

    // Banner Big Text
    gsap.to("#headingBig", {
      duration: 1.5,
      scale: 2,
      delay: 0.8,
      transformOrigin: "top left",
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });

    // Banner Design Text
    gsap.to("#headingSmall", {
      delay: 1.2,
      opacity: 0
    });
    gsap.to("#headingSmall", {
      delay: 2,
      left: "-100vw"
    });
    gsap.to("#headingSmall", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1
    });

    // Banner Small Text
    gsap.to("#headingText", {
      delay: 1.2,
      opacity: 0
    });
    gsap.to("#headingText", {
      delay: 2,
      left: "-100vw"
    });
    gsap.to("#headingText", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1
    });

    // Company Section - Title
    gsap.set(".company-section .title, #compDescription", {
      opacity: 0,
      y: -200
    });
    gsap.to(".company-section .title, #compDescription", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".company-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Company section - Image
    gsap.set(".compy-box", {
      opacity: 0,
      scale: 0
    });
    gsap.to(".compy-box", {
      duration: 1.6,
      delay: 0.1,
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".company-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Designers section - Title
    gsap.set(".designer-section .title, #designDescription", {
      y: -200,
      opacity: 0
    });
    gsap.to(".designer-section .title, #designDescription", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Designer section - white border
    gsap.set(".box-border", {
      opacity: 0,
      scale: 0.6,
      rotate: 15
    });
    gsap.to(".box-border", {
      duration: 1.5,
      opacity: 1,
      scale: 1,
      rotate: 0,
      ease: "power.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Designer section - Image - left
    gsap.set(".team1, .team3", {
      opacity: 0,
      rotate: 45,
      scale: 0.5
    });
    gsap.to(".team1, .team3", {
      duration: 1.6,
      delay: 0.2,
      opacity: 1,
      rotate: 0,
      scale: 1,
      ease: "power2.inOut",
      transformOrigin: "top",
      yoyo: true,
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });
    // right
    gsap.set(".team2", {
      opacity: 0,
      rotate: -45,
      scale: 0.5
    });
    gsap.to(".team2", {
      duration: 1.6,
      delay: 0.2,
      opacity: 1,
      rotate: 0,
      scale: 1,
      ease: "power2.inOut",
      transformOrigin: "top",
      yoyo: true,
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Projects section - Title
    gsap.set(".projects-section .title", {
      y: -200,
      opacity: 0
    });
    gsap.to(".projects-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Projects section - Left
    gsap.set(".pbox-left", {
      opacity: 0,
      x: -800
    });
    gsap.to(".pbox-left", {
      duration: 1.6,
      x: 0,
      opacity: 1,
      scale: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Project section - Right
    gsap.set(".pbox-right", {
      x: 500
    });
    gsap.to(".pbox-right", {
      duration: 1.6,
      x: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        marker: false
      }
    });

    // Project section - content section
    gsap.set(".project-content", {
      x: -200,
      y: -200,
      opacity: 0
    });
    gsap.to(".project-content", {
      duration: 1.6,
      x: 0,
      y: 0,
      opacity: 1,
      delay: 0.2,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Testimonial section - Title
    gsap.set(".testimonial-section .title", {
      y: -200,
      opacity: 0
    });
    gsap.to(".testimonial-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Testimonial section - Left Content
    gsap.set(".left-row", {
      opacity: 0,
      xPercent: -100
    });
    gsap.to(".left-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Testimonial section - Right Content
    gsap.set(".right-row", {
      opacity: 0,
      xPercent: 100
    });
    gsap.to(".right-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Contact section - Box & Border
    gsap.set(".contact-box, .contact-border", {
      opacity: 0,
      scale: 0
    });
    gsap.to(".contact-box, .contact-border", {
      duration: 1.6,
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".contact-us",
        start: "top center",
        end: "bottom",
        markers: false
      }
    });
  }, []);

  return (
    <div className="App">
      <section id="banner">
        <img id="bannerBigimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAACUCAMAAAAzmpx4AAABvFBMVEX/0aizstr////9Ql/6+foRGzT/vnUEAKP/273/1rL/06z8/Pz9Nlr/0qf/1ar/2Kz4zqz/8eYAAAD8fXz+o4//7t/+i4L/y6T+b3P/zqL+sJarr9//+vbsw548MTz+3sP/5dD9TWMHFzMAABIADi2npq0AACxDRVRrW1c3PEyKiNTb290RHC7/1KMJCCvIqYzNzurxP2VzcsF5IJK0k6Do6PUWFaX2u6SaKIgOFlvmyKuFg8Tgornkz80dITjXg6f/xIUzKaPmx7qBkarJnJ7YwcPeuKhfT6P/IkkAAB3a2u7bsctdRFOPkc7Esaibo7k1PLJQaY5ycY8LE3DBt9PawdP/6erDw8ZvbcadntOOja5QQqMAAHChhXSAa6UhIKUAAGCCYEj/pHDdmJj2raJvSJ38eon3wMX+rLH+kp+niqNVV7iWfKD9aX3/2dzVkIBZR0N8NkrEPlVqIj1laXWEhIjoh6KCYV/Tn5BRVY81HDC9d2dERm5/Uo5maJwLGBujk5DElL7WK0M9ACKfL0lPJDzqd5DiXoCvSmWIJ0XAgqWtm8APGE9xXKSgX5frjos6MCz+g2m7ilrbo2hmK7ciAAARG0lEQVR4nN2ciWMa153HYQYyEsylE0kIWyDA6ADGrEAtjmQjDLamQZAaWcKyRN3NxrEOr+pKtdumTbObjTdO3SP+h/vemzcnMwMIRuB+28gwXO8zv9/7vnPGNfrvKJfP1YsYVyif55mevsMJ9UjFHx28L7OuYePqgYphGJZ/QBXKHBdgmCTbv0L1rKtTzW6IwkYIUs3NhLktUewt7H1VL1SCRPWfYZpeFwRhpI/F6lF9oCpP0/QEeLKS7GO5elM/qCZJMrwFgsUMjWn0g8o1Q5N/XwHPZtt9htHryr/dTv2g4kAKzoBnYrsUZLZ0GnHMNvtCFQAp+IUoCAv2Z5/Ju7UK1vkr/3gb9YOK5WZIehr6RTuqug6r7livpC9U7BxNhssgBfO2xfzIqFwcSdKTIAU3uqMa603WZe8TFfaLldFuqAQP0ZP6QmWwZS2VK0CTdAA0WTftgiVRCXW34BaEIaHy5fXSUbkmQP8CNlm2pwVSCR5R9ItZD8rAKWuNEXavTo35+0LF5KtFrap5LRX0C3oEBMvOrOVY1XGs6vwsVMCgJDo6QozM2mhkvi9UbD5mRcUxLBuYISd8oBM/ylp3GZgtY3vFuNjAxIxBc6hxvknctCtOf6iYufX7eq2Xdnefr/9XrvBmHWpycm4dK2D1HXwdCkYJxEuol3wwyKDHr9cEh6nsOmD9oWKNvw308CFNk8DTDQqvW/WEmCRQvh4MJZM3CWIeGiagIkn0JST6MvDImkqTBX2iIsOdaiZga4Sl4BboL476ifmRWYWK/hKU8rktFTN6c2psQR7E9YlqrnMFpKBoxcmgwDFKsBNsoHro8X/1mDhDoZ82pWIgBxDua/bLLToXqEBrRsl9Kaa0ix4ZY/XixZlMZRorZnQet1ILs32k6kbc8ckdvU7WcF3jSz4zKpIm54kXtE0GLshtL6qOA6E6dRu6Ae5jTOXDfSojFUm+OMNuYZqBSqhwsK6ZCqagGRWnz9IRcPAmfKtMdUa8DMtU7LBRcaE00BGimn/sV6hO0wbt7e3twH//W6Z6+RWmmkingYcbqHxjA6RiQ+fezc3VR4jq8ZcvXspUTzfNtfobOQPD8oNXqzdeuxibesVcNxWXiEci0UVMdUaHXzzGVCkL/RazkDRujMlX0ej2IWekUlJw6to9kAndiHg3l5YUKpp+LlE9WrLSZ7JeAaZX4N/NqDeeaKGaxe3VmHT0uqmit1aICqYKfyVnoNE+WvUS1C0U2NiiGZVrdnZhbH5qBB8cINVzxbjcQb9HIz+WegQ44NlzAh6wooJcs7NyH2VwVFpn11G1Qvkffwl6TBKfJZVWA6FqZPVqaKlaoTz+l48J/Hx4qQQqpxflJlqhdP8SMufQUvmJVrVAZcWsKID/ZbOCKIqCkM2Cv+BVTDUCqBhL9WuE3xWVWnYJqTX9PJ6s0CpRoVqYIqYWbDQ1CCoZaWUPyUO0QAGqX3xqkJj1S1Spi7YNAXH9VBhq5fLWEmiTN5cu9ggjFKD6HU1qRM9MZmWqeGJkgVgYHbHU6MIA3AJDLaWiEaRofM9vgIJUD7WaXp/TUGG3gM0To/yVH+GexkCoPBfbXlnbFx6/HgpQ7f5Co93HL1+2UllqYFQr4wgomgLB2r40RAq5hagKt2vg1aGm8hB7iCr12evN1ObFihEKULkrWEG3INQFaO7D3F4RsOwSVWrzzfqbN29ifj0UcLCsWCnUoAp3GsENQawEG1lxuKlgvsEMjL9Gs7lvYjooP7F3sbR06/e1QrPZrDUqjZWFMbHeyAjCUFNJAQEDpW08SV3yaKE8F+OgskW3V0HawRrlmdrYGJsH/YuhpsKFv0x5U5hqJ0to0u9C8hFvZFHIIii4dAOhhp/KT1ykvNvS0sLWnuQgEi02R2j4lzCsUwtTCzfXt0CHcPipiMvNCCgehFoYi4mE4n6w2FjRW8A25gEUeBPoXw0/FRHbjoAcu4GgNop7HsXSwStaqvmNqZHJOd5D+D8GqltR1Fx9AaDGYsWY2mvXUEVuCY2NqZtz6yXcaR96qsvFiDcS/cPk+sJUrAhipVLtKfUqstRYrmysb+EOxvBT+T2X0fHV8z+u5/lyLLaXVYdYhOoW3q+XMwe1DXmUMvxUYEi1svfkT4F8frRUn9cPHFUP/HOmRlFZecAkaMbCw0kFC7nf3P8xz5UryycVIauO86HlS/pmP0dRFY88ZyOIw9xnB50+0MujKGp/eXm5srxMITVPMgK0dzDwGo8gqNWfw/eoA/zhHon4/Q2IkYNQy8uZJqWo4kGt8eV21AtHk+DIiaAdjQwzFVHXQhVUqFytAbtOhOcv5zdunH8GXjkQNRMR2vHViC3VQMbCKDoS1LIGqgAOVWAvg3A/gMpRBS0UpNJ6oMtnqUHEyq2B0qTfgXREIAjxpFkAg6sc5c7i7JMGkvL4KnUxP0/M2+r655hOVChN9mWWsYJZ950GUCXTUH0CShQUquGbOavX5Dqlpl+uBp9WKo2g2ygwxPJIzZkywh9GqkYBRwo2sWqNWjZDkiRmpYGKX6Gym7eVda1UF5kWozhA2WeBhARabXluVHILu210WNblcCJWD/bRzpFMTV4ROUDPv7Wj+vTliqzLbUjVUzkcWBeOrK5uI60qgs/+564d1bcP/3dR+tQ26E4NIZWpIt/R72yp6Nt/UD/6kVBFfkPStrF6R4dfeT8yqsj/3Sbp39lR3aVJ8ochpXKxN1JmVJvfkST5vR3V93DVR8nB1CGnbDQfBqqQ2f6XKNwAQ5/ZUZ2hvT5R/IFEyOXi8Q7zq2D1j0o6s5zPuA0LCi273bajuo0W5v6I3w/3ku98/vnnxWK1uHWFK1z7vz9Qs12Ow5pGi4q3f2xHRYYD6P0sI1NVhfrOTvcXyfSLip2bmTBoZkLamc7NSSult7+1hvoWr6JOKAAKVXlnZ2BU8PqXli3gElVgBq/82lj7XXk73ZxsfgoVn491fU1dP6lIg0ARGfQKDoSNCX6vLHnL28YVqnxsZ2BUzNzki58Z9aejMqNurKXfWlO9lU8JPW2kqu5033b1zS1Yrky1aocNzCgxfGtpFz/+f1iJML5yQaaq8ldokPtCJW3KN6VKzsk7D+hXPxxbUR3/8B1J4/dN4I39ZYmq6NJs9u/UNq5CZWzwmXwJqp5p0X69tHsX693pqXWsTk/fye/7tIQlvVQvadRpk3wFKoYvbemuDGZKQSiz4gZ1sqxWwc7k3nKMiskH3cG6T/v9LA80Oh0OT/O22qqbQ9W37D83EQ5/IT1yjmoLnvO6PlqwrzRB09Os9eY3KCsq4zWTOkHDoSe5brq6V6Vyt1ydLlHZfjS5a061a3upOwNtdLIrJ7xCveKDSkG0564DKsMlgIo2Bk/F8G63EIT1FnTQNdWrEyre3DDsq4ujVFJSMz7fblBwB0FBGL5ajKkF6oDKlTSvVvb3WnCSignxLHL1etAtuN0lH8PG4JWoXVGBNgBx/FLSE4mqNDAqpvwe3qIIBAoUQ4CXxY7ki8Xijvr5jqikFHwyLs2RjSOsYBu/dpCKPaaoA5bJ1wER/A/8rRbrxXxX9QqkIPL2J3gbyaIUrDY3+3CSao1qUmWOhxfRQyqh7n5SrMe6dIvkcQZi/KilqmeOOduPOZmB+WamdhDiSkFRogLlKdarebU8bakYNv+AqiEqvI1kHMW8ST3I27WvTlKxp7UTqnC8U0exQjkIMjCmXnffjoph7h9QVLMCqfAE2SL8lkqOogprrDWWkx4IUjCTyzUPGqKWqnMPZH2nObQ8Av1iCU38RbzQK9BqUO7UOgudjBV/RC3nCvvUiQCDhRKwWi0WO6VK8u/xkKtWqbuX0B6n6BKIlLzEdcRbmYaj9apG3aEKGVAxBFGETgYtsNppK5wsH2gW8jNfo4q1/fWdWk45/KBsgeWsW5xQjdp+DpqYBLVXFIvljjyQSd7XrOQDPVqFVN881R3M3TcvubMZeLJPVfb33VIr7H5SBSprKGyouLWcrvzU029MqChqzbTojrpF+eAkU7sTFOqosQJURSGm/SlrquSxcTrjKYrVatN4fM0sCR3t3YLW5mS/ggIloDtv7FU7o0reRyX+uUZ/lZz9r9pjKAnNsJwdibDMQVOlEkHNqmp7cFZUTEgyilWtJCrtkYhkGfnWb3B4fMXy1B2II918CFBpzcKayoepTBch1YU7iYq/dioXR+3LSBJVvgMqV/IUFfgbEJBoPB6P6mnQIRg99KbTa89AF8tRTRAsQRBRK1zVjkNsqECIkZs/evT04vDwMKHDiibAoddPwYvwPQWTBHS6XvHlJtXMNBqgm9NoNMCgT2vsNh7Iyd0K6pjjuPSmZuk4spkGh9bk14+u3QNdyaMCaHZyTVUHnbVXbEhX6nNNsFIJ0OsFnTEs0/Gjs/MWvNrpUc695tzatMJJpdhgxMGlUxFtqIBJyh2P96Z9Jmfbq/stjaYuY2yoWGVhAQaXO5SxInCtXvOq+TS6o1Tc/f9o0d/4zvqBSo7B08Cwhympz46gXJzyovnY0Vmq6dstOlvvbCysxLkgFS4N61b0PI2mSTkMlbNYU3R05sw10bJESuKVXyQ7KsZ1pElBmIRxrzd+KD2WE/DIYq7JUSrNoqGqyQ7nLZShyB1UE1lIlZKoZCsp3L/+8VWPVK4kbrMOUEA4iQqWlGEw75FVuR2tV71RyUaXQ2Mo7jAKMxA9xGOvptVQeJhjpXQwjuBbuEPg7fG01gHfWxZ7iGMFhmc4BVGTld70Rrxou5I8oWHWA5TkbKx68EAo2RXgwJBL34iAfgWrjpNNe4DyLzvaXvVGJdcsaOAspLqRZtX22WYFwVmqyRYoWntbx/Zzt6fYFliVii1LDng6mBlp7T3xVKoJzW+1nWeXCdYADNwhjqikQUihbHc6nB01zrQEa7IbKoaRsu0EU30WYpnQAxyqQcUKFLulWgU6GeErkv2uDGjOo9HzEIvr2oFdqJweCweMdjHT2XygImyDYBgFqRIhuRE7tS2ywxnIGVosek4L0QEVy0tddx/jQlQMi57WTCaWNHJ6NmbOcFMe3S91soLKwdYp96s0xyYgFRf6FaQ6ti+x4zNnuoaYDrCGF9uvdjNN6ml8/BnHJaKpxCiXGI8DrsGtCyNptzAa8q/D1W62vD0OdAipXnOH8PG4rVW4HO4xMQzP59fP5E205N95nnexnbfCSGwagZynE5FoIv0P9CQ0OCrGl9+JVYvF47fS3bDP3hWrsdhOvrv9FqzvHHKsRuHERTQVWUWIrjYr/w7uTNiRb8z+7vu3Z2/vHuNn6vRtR27xDFAsrnq9EXjvC7jcuAgOPPPZtMHOUpXVG84/OX6iPC6rJW5PhSoS3GsRj0fQ/+E6Pqpmdp9ydFUOpqDubvpFmIDd1Cs2BCrSNghSPBFifT6WT8QjCOvctmo564EMvO6DHYXX2gCjYPH1HIraU8FQAajo5iEH+30Mwx16Qf2KtAnWdewPtLwsqiMqmH3naaWEYPQIs3D8cHCxaiM9VcuF8z40FQ0vgwsl1Ytjk6GEMtvUerH9sFD5RkFh1ELf0+nDedQbfXbPoGfgYOKD/pj2omCfbxBU0mkFpx1Q/fMTO/0Es+3ZB/3BD8/gdNNPth+EVEkE6OusvD1SMQyIh/zbZFuqVCpuBPgpDo+2o5K/GcXRaap7ut8Oh+2pPjyDaomVyUGD/hkO/1r7/F67fe09Uc3qqH4NZFu4K8v4xffahavHDESO4AyKuTpLwT54IPgKRrI7R2HuoRt+d2YXfXN26E+jo4qxSw79Cf7bZfk/0Ri8C39th+7XZ6oWRJMGtd2dKqza4e5/vw8Mw6d/TyrrWzV/xPoXS4dm5eDI0QcAAAAASUVORK5CYII=" alt="Banner" />
        <h1 id="headingBig">Big Heading</h1>
        <h2 id="headingSmall">Small Heading</h2>
        <p id="headingText">Some descriptive text</p>
      </section>
      <section className="company-section">
        <h2 className="title">Our Company</h2>
        <p id="compDescription">Company Description</p>
        <div className="compy-box">Company Image</div>
      </section>
      <section className="designer-section">
        <h2 className="title">Our Designers</h2>
        <p id="designDescription">Designer Description</p>
        <div className="box-border">Border</div>
        <img className="team1" src="https://images.pexels.com/photos/23631075/pexels-photo-23631075/free-photo-of-cameraman-filming-in-city.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team 1" />
        <img className="team2" src="https://images.pexels.com/photos/23631075/pexels-photo-23631075/free-photo-of-cameraman-filming-in-city.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team 2" />
        <img className="team3" src="https://images.pexels.com/photos/23631075/pexels-photo-23631075/free-photo-of-cameraman-filming-in-city.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team 3" />
      </section>
      <section className="projects-section">
        <h2 className="title">Our Projects</h2>
        <div className="pbox-left">Project Left</div>
        <div className="pbox-right">Project Right</div>
        <div className="project-content">Project Content</div>
      </section>
      <section className="testimonial-section">
        <h2 className="title">Testimonials</h2>
        <div className="left-row">Left Testimonial</div>
        <div className="right-row">Right Testimonial</div>
      </section>
      <section className="contact-us">
        <div className="contact-box">Contact Box</div>
        <div className="contact-border">Contact Border</div>
      </section>
    </div>
  );
};

export default About2;
