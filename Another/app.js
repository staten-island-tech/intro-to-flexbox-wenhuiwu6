const cats = [
  {
    name: "Maine Coon",
    price: 2000,
    inStock: true,
    image: "MaineCoon.png",
    alt: "The Maine Coon is a large domesticated cat breed. One of the oldest natural breeds in North America, the breed originated in the U.S. state of Maine, where it is the official state cat.",
  },
  {
    name: "British Shorthair",
    price: 1200,
    inStock: true,
    image: "BritishShorthair.png",
    alt: "The British Shorthair is the pedigree version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face.",
  },
  {
    name: "Persian",
    price: 1500,
    inStock: true,
    image: "Persian.png",
    alt: "The Persian cat, also known as the Persian Longhair, is a long-haired traditional breed of cat characterised by a round face and petite muzzle.",
  },
  {
    name: "Siamese",
    price: 1000,
    inStock: true,
    image: "Siamese.png",
    alt: "The Siamese cat is one of the first distinctly recognised breeds of Asian cat, originating from Thailand.",
  },
  {
    name: "Bengal",
    price: 1800,
    inStock: true,
    image: "Bengal.png",
    alt: "The Bengal cat is a hybrid breed created from crossing an Asian leopard cat with domestic cats.",
  },
  {
    name: "Sphynx",
    price: 3000,
    inStock: true,
    image: "Sphynx.png",
    alt: "The Sphynx cat is a hairless breed developed through selective breeding of naturally occurring hairless cats.",
  },
  {
    name: "Siberian",
    price: 1700,
    inStock: true,
    image: "Siberian.png",
    alt: "The Siberian is a centuries-old Russian landrace of domestic cat with long, thick fur.",
  },
  {
    name: "Norwegian Forest",
    price: 2000,
    inStock: true,
    image: "NorwegianForest.png",
    alt: "The Norwegian Forest Cat is a breed from Northern Europe, adapted to very cold climates.",
  },
  {
    name: "Domestic Shorthair",
    price: 300,
    inStock: true,
    image: "DomesticShorthair.png",
    alt: "A moggy or domestic shorthair is a non-pedigree cat with a mix of different ancestries.",
  },
  {
    name: "Ragdoll",
    price: 2200,
    inStock: true,
    image: "Ragdoll.png",
    alt: "The Ragdoll is a large, affectionate breed with blue eyes and a silky coat.",
  },
  {
    name: "Felis Catus",
    price: 1300,
    inStock: true,
    image: "FelisCatus.png",
    alt: "The domestic cat is the only domesticated species of the family Felidae.",
  },
  {
    name: "Scottish Fold",
    price: 2000,
    inStock: true,
    image: "ScottishFold.png",
    alt: "The Scottish Fold is known for its unique folded ears caused by a natural genetic mutation.",
  },
  {
    name: "Cheetoh",
    price: 4000,
    inStock: true,
    image: "Cheetoh.png",
    alt: "The Cheetoh cat is a hybrid of Bengal and Ocicat breeds, known for its spotted coat.",
  },
  {
    name: "Exotic Short Hair",
    price: 1500,
    inStock: true,
    image: "ExoticShortHair.png",
    alt: "The Exotic Shorthair is similar to the Persian but with a short, plush coat.",
  },
  {
    name: "Abyssinian",
    price: 1400,
    inStock: true,
    image: "Abyssinian.png",
    alt: "The Abyssinian has a ticked coat and an energetic, intelligent personality.",
  },
  {
    name: "Birman",
    price: 1600,
    inStock: true,
    image: "Birman.png",
    alt: "The Birman has deep blue eyes and white 'gloves' on its paws.",
  },
  {
    name: "Oriental Shorthair",
    price: 1300,
    inStock: true,
    image: "OrientalShorthair.png",
    alt: "The Oriental Shorthair is sleek and elegant, with large ears and many coat colors.",
  },
  {
    name: "Savannah",
    price: 5000,
    inStock: true,
    image: "Savannah.png",
    alt: "The Savannah is a tall, spotted hybrid cat from a cross between a serval and domestic cat.",
  },
  {
    name: "Turkish Van",
    price: 1800,
    inStock: true,
    image: "TurkishVan.png",
    alt: "The Turkish Van is famous for its love of water and semi-long fur.",
  },
  {
    name: "Manx",
    price: 1200,
    inStock: true,
    image: "Manx.png",
    alt: "The Manx is a tailless breed from the Isle of Man, known for its rounded look and playful nature.",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = `
    <div class="card">
      <img src="${item.image}">
      <h2>${item.name}</h2>
      <p>${item.alt}</p>
      <p>Price: $${item.price}</p>
    </div>
  `;
  container.insertAdjacentHTML("afterbegin", html);
}

cats.forEach((item) => inject(item));

function addToCart() {
  const buttons = document.querySelectorAll("button");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      console.log(event.target.closest(".card").getAttribute("data-title"));
    })
  );
}
addToCart();
