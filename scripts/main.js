
 document.querySelectorAll("[data-program]").forEach((btn) => {
   btn.addEventListener("click", () => {
     const program = btn.getAttribute("data-program");
     alert(
       `Вы выбрали программу: ${program}. На реальном проекте здесь будет переход к оформлению заказа.`
     );
   });
 });


 document.querySelectorAll('a[href^="#"]').forEach((link) => {
   link.addEventListener("keydown", (event) => {
     if (event.key === "Enter" || event.key === " ") {
       const targetId = link.getAttribute("href").substring(1);
       const target = document.getElementById(targetId);
       if (target) {
         event.preventDefault();
         target.scrollIntoView({ behavior: "smooth", block: "start" });
       }
     }
   });
 });

