document.getElementById("downloadButton").addEventListener("click", function() {
    const doc = new jsPDF();
    doc.text("Your portfolio content goes here", 10, 10); // Modify this line to add your portfolio content
    doc.save("portfolio.pdf");
});
