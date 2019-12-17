const changeImages = () => {
  document.querySelector("#image1").addEventListener("mouseover", () => {
    document.querySelector("#image1").src = "images/image1_2.jpg";
  });
  document.querySelector("#image2").addEventListener("mouseover", () => {
    document.querySelector("#image2").src = "images/image2_2.jpg";
  });
  document.querySelector("#image3").addEventListener("mouseover", () => {
    document.querySelector("#image3").src = "images/image3_2.jpg";
  });
  document.querySelector("#image4").addEventListener("mouseover", () => {
    document.querySelector("#image4").src = "images/image4_2.jpg";
  });
  document.querySelector("#image5").addEventListener("mouseover", () => {
    document.querySelector("#image5").src = "images/image5_2.jpg";
  });
};

changeImages();
