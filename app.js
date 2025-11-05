const cats = [
  {
    name: "Maine Coon",
    price: 2000,
    image: "MaineCoon.png",
    alt: "The Maine Coon is a large domesticated cat breed. One of the oldest natural breeds in North America, the breed originated in the U.S. state of Maine, where it is the official state cat.",
  },
  {
    name: "British Shorthair",
    price: 1200,
    image: "BritishShorthair.png",
    alt: "The British Shorthair is the pedigree version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face.",
  },
  {
    name: "Persian",
    price: 1500,
    image: "Persian.png",
    alt: "The Persian cat, also known as the Persian Longhair, is a long-haired traditional breed of cat characterised by a round face and petite muzzle.",
  },
  {
    name: "Siamese",
    price: 1000,
    image: "Siamese.png",
    alt: "The Siamese cat is one of the first distinctly recognised breeds of Asian cat, originating from Thailand.",
  },
  {
    name: "Bengal",
    price: 1800,
    image: "Bengal.png",
    alt: "The Bengal cat is a hybrid breed created from crossing an Asian leopard cat with domestic cats.",
  },
  {
    name: "Sphynx",
    price: 3000,
    image: "Sphynx.png",
    alt: "The Sphynx cat is a hairless breed developed through selective breeding of naturally occurring hairless cats.",
  },
  {
    name: "Siberian",
    price: 1700,
    image: "Siberian.png",
    alt: "The Siberian is a centuries-old Russian landrace of domestic cat with long, thick fur.",
  },
  {
    name: "Norwegian Forest",
    price: 2000,
    image: "NorwegianForest.png",
    alt: "The Norwegian Forest Cat is a breed from Northern Europe, adapted to very cold climates.",
  },
  {
    name: "Domestic Shorthair",
    price: 300,
    image: "DomesticShorthair.png",
    alt: "A moggy or domestic shorthair is a non-pedigree cat with a mix of different ancestries.",
  },
  {
    name: "Ragdoll",
    price: 2200,
    image: "Ragdoll.png",
    alt: "The Ragdoll is a large, affectionate breed with blue eyes and a silky coat.",
  },
  {
    name: "Felis Catus",
    price: 1300,
    image: "FelisCatus.png",
    alt: "The domestic cat is the only domesticated species of the family Felidae.",
  },
  {
    name: "Scottish Fold",
    price: 2000,
    image: "ScottishFold.png",
    alt: "The Scottish Fold is known for its unique folded ears caused by a natural genetic mutation.",
  },
  {
    name: "Cheetoh",
    price: 4000,
    image: "Cheetoh.png",
    alt: "The Cheetoh cat is a hybrid of Bengal and Ocicat breeds, known for its spotted coat.",
  },
  {
    name: "Exotic Short Hair",
    price: 1500,
    image: "ExoticShortHair.png",
    alt: "The Exotic Shorthair is similar to the Persian but with a short, plush coat.",
  },
  {
    name: "Abyssinian",
    price: 1400,
    image: "Abyssinian.png",
    alt: "The Abyssinian has a ticked coat and an energetic, intelligent personality.",
  },
  {
    name: "Birman",
    price: 1600,
    image: "Birman.png",
    alt: "The Birman has deep blue eyes and white 'gloves' on its paws.",
  },
  {
    name: "Oriental Shorthair",
    price: 1300,
    image: "OrientalShorthair.png",
    alt: "The Oriental Shorthair is sleek and elegant, with large ears and many coat colors.",
  },
  {
    name: "Savannah",
    price: 5000,
    image: "Savannah.png",
    alt: "The Savannah is a tall, spotted hybrid cat from a cross between a serval and domestic cat.",
  },
  {
    name: "Turkish Van",
    price: 1800,
    image: "TurkishVan.png",
    alt: "The Turkish Van is famous for its love of water and semi-long fur.",
  },
  {
    name: "Manx",
    price: 1200,
    image: "Manx.png",
    alt: "The Manx is a tailless breed from the Isle of Man, known for its rounded look and playful nature.",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = ` <div class="card" data-name="${item.name}" data-img="${item.image}" data-alt="${item.alt}" data-price="${item.price}" >
      <img class = "card-img" src="${item.image}">
      <h2 class = "card-name"> ${item.name}</h2>
      <p class = "card-alt"> ${item.alt}</p>
      <p class = "card-price"> price: $${item.price}</p>
      <button class="button"> Add to Cart</button>
    </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

cats.forEach((item) => inject(item));

function addToCart() {
  const buttons = document.querySelectorAll(".button");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      const cart = document.querySelector(".cart");
      const name = event.target.closest(".card").getAttribute("data-name");
      const price = event.target.closest(".card").getAttribute("data-price");

      const html = `<div class="cart-item" data-price="${price}"> ${name} : $${price}`;
      cart.insertAdjacentHTML("afterbegin", html);
      insideCart();
    })
  );
}

addToCart();

// .remove is to remove used here it to remove all the extra cards that does not belong into the category of the card
function filter(type) {
  const container = document.querySelector(".container");
  document.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });
  cats.forEach(function (cat) {
    if (type === "all") {
      inject(cat);
    }
    if (type === "low" && cat.price < 1500) {
      inject(cat);
    }
    if (type === "mid" && cat.price >= 1500 && cat.price <= 2500) {
      inject(cat);
    }
    if (type === "high" && cat.price > 2500) {
      inject(cat);
    }
  });

  addToCart();
}

function showFilter() {
  const buttons = document.querySelectorAll(".filter button");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filter(btn.getAttribute("data-filter"));
    });
  });
}

showFilter();

// the + in +item.getAttribute("data-price"); is used for converting the string(number of price) to a number
// strings cannot be added up
function insideCart() {
  const cart = document.querySelector(".cart");
  document.querySelectorAll(".cart-total").forEach((old) => {
    old.remove();
  });
  const cartItems = document.querySelectorAll(".cart-item");
  cartTotal = 0;
  cartItems.forEach((item) => {
    cartTotal += +item.getAttribute("data-price");
  });
  const html = `<div class="cart-total"> Total: $${cartTotal}</div>`;
  cart.insertAdjacentHTML("afterbegin", html);
}

// function addToCart() {
//   const buttons = document.querySelectorAll("button");
//   const btnArray = Array.from(buttons);
//   btnArray.forEach((btn) =>
//     btn.addEventListener("click", function (event) {
//       console.log(event.target.textContent);
//       console.log(
//         event.target.closest(".display-card").getAttribute("data-title")
//       );
//     })
//   );
// }
// addToCart();
