/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom_blue_bg_1: "#005894",
        custom_white: "#FFF",
        border_color: "#F2F2F2",
        custom_green: "#4CAF50",
        custom_orange: "#FF7C1C",
        custom_blue_bg_2: "#003A61",
        custom_blue_text: "#20588F",
        text_1: "#015894",
        whiteglass: "rgba(255,255,255,0.7)",
        table_border: "#c7dfef",
        table_no: "#e4f3ff",
        school_bg: "#fafafa",
      },
      screens: {
        max_screen: "768px",
        min_screen: "320px",
        breakpoint: "542px",
        //Footer breakpoints
        footer_1: "252px",
        footer_2: "288px",
        footer_3: "300px",
        footer_4: "328px",
        footer_5: "368px",
        footer_6: "376px",
        footer_7: "472px",
        footer_8: "627px",
        //Change Theme button
        theme: "384px",
      },
      spacing: {
        height_1: "3.7rem",
        custom_300: "23rem",
        custom_p1: "1rem",
      },
      height: {
        buttons: "80px",
        change_theme_button: "70px",
        change_theme_button2: "50px",
        banner: "700px",
        435: "435px",
        195: "195px",
        110: "110px",
        table_tr: "30px",
        profilemini: "300px",
        hr_h: "2px",
        profile_height: "40px",
      },
      backgroundImage: {
        banner_image: "url(./assets/banner.jpg)",
        redcar: "url(./assets/redcar.svg)",
        oldredcar: "url(./assets/oldredcar.svg)",
        redbluecar: "url(./assets/redblue_car.svg)",
        all: "url(./assets/all.svg)",
        all2: "url(./assets/all2.svg)",
        all3: "url(./assets/all3.svg)",
        all4: "url(./assets/all4.svg)",
        all5: "url(./assets/all5.svg)",
        all6: "url(./assets/all6.svg)",
        all7: "url(./assets/all7.svg)",
        all8: "url(./assets/all8.svg)",
        all9: "url(./assets/all9.svg)",
        all10: "url(./assets/all10.svg)",
        all11: "url(./assets/all11.svg)",
        all12: "url(./assets/all12.svg)",
        all13: "url(./assets/all13.svg)",
        all14: "url(./assets/all14.svg)",
        all15: "url(./assets/all15.svg)",
        all16: "url(./assets/all16.svg)",
        all17: "url(./assets/all17.svg)",
        all18: "url(./assets/all18.svg)",
        all19: "url(./assets/all19.svg)",
        school: "url(./assets/school.svg)",
      },
      fontSize: {
        size_1: "1rem",
        size_2: "0.728rem",
        size_3: "0.91rem",
        size_4: "1.183rem",
        size_5: "1.1rem",
        size_6: "0.8rem",
        size_7: "0.9rem",
        size_8: "0.6rem",
        change_f_size: "150%",
      },
      width: {
        header: "94%",
        button1: "175px",
        button2: "140px",
        button3: "140px",
        70: "70px",
        110: "110px",

        50: "50px",
        sidebar: "300px",
        profile_width: "40px",
        pitinfo: "calc((100vw -32px) - 70px)",
      },
      fontWeight: {
        inner_text: "500",
      },
      boxShadow: {
        custom_shadow: "0px 0px 2px 0px rgba(0,0,0,0.2)",
      },
      backgroundSize: {
        "50%": "50%",
        "40%": "30%",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};

