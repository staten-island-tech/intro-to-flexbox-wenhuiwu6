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
    inStock: True,
    img: "BritishShorthair.png",
    alt: "The British Shorthair is the pedigree version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face.",
  },

  {
    name: "Persian",
    price: 1500,
    inStock: True,
    image: "Persian.png",
    alt: "The Persian cat, also known as the Persian Longhair or simply Persian, is a long-haired traditional breed of cat characterised by a round face and petite, but not flat and not smashed in, muzzle.",
  },

  {
    name: "Siamese",
    price: 1000,
    inStock: True,
    image: "Siamese.png",
    alt: "The Siamese cat is one of the first distinctly recognised breeds of Asian cat. It derives from the Wichianmat landrace. The Siamese cat is one of several varieties of cats native to Thailand. The original Siamese became one of the most popular breeds in Europe and North America in the 19th century",
  },

  {
    name: "Bengal",
    price: 1800,
    inStock: True,
    image: "Bengal.png",
    alt: "The Bengal cat is a breed of hybrid cat created from crossing of an Asian leopard cat with domestic cats, especially the spotted Egyptian Mau.",
  },

  {
    name: "Sphynx",
    price: 3000,
    inStock: True,
    image: "Sphynx.png",
    alt: "The Sphynx cat also known as the Canadian Sphynx, is a breed of cat known for its lack of fur. Hairlessness in cats is a naturally occurring genetic mutation, and the Sphynx was developed through selective breeding of these animals, starting in the 1960s.",
  },

  {
    name: "Siberian",
    price: 1700,
    inStock: True,
    image: "Siberian.png",
    alt: "The Siberian is a centuries-old landrace of domestic cat in Russia, and recently developed as a formal breed with standards promulgated the world over since the late-1980s. Since 2006, the breed is recognised for registry and championship status with all major cat registries.",
  },

  {
    name: "Norwegian Forest",
    price: 2000,
    inStock: True,
    image: "NorwegianForest.png",
    alt: "The Norwegian Forest Cat is a breed of domestic cat originating in Northern Europe. This landrace breed is adapted to a very cold climate, with a top coat of long, glossy hair and a woolly undercoat for insulation.",
  },

  {
    name: "Domestic Shorthair",
    price: 300,
    inStock: True,
    image: "DomesticShorthair.png",
    alt: "A moggy is any cat which has not been intentionally bred. Moggies lack a consistent appearance unlike purebred cats that are selectively bred for appearance conforming to a standard.",
  },

  {
    name: "Ragdoll",
    price: 2200,
    inStock: True,
    image: "Ragdoll.png",
    alt: "The Ragdoll is a breed of cat with a distinct colorpoint coat and blue eyes. Its morphology is large and weighty, and it has a semi-long and silky soft coat. American breeder Ann Baker developed Ragdolls in the 1960s. They are best known for their docile, placid temperament and affectionate nature.",
  },

  {
    name: "Felis Catus",
    price: 1300,
    inStock: True,
    image: "FelisCatus.png",
    alt: "The cat, also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.",
  },

  {
    name: "Scottish Fold",
    price: 2000,
    inStock: True,
    image: "ScottishFold.png",
    alt: "The Scottish Fold is a distinctive breed of domestic cat characterised by a natural dominant gene mutation associated with osteochondrodysplasia.",
  },

  {
    name: "Cheetoh",
    price: 4000,
    inStock: True,
    image: "Cheetoh.png",
    alt: "He Cheetoh cat is a hybrid of Bengal and Ocicat breeds, known for its spotted coat and wild look.",
  },

  {
    name: "Exotic Short Hair",
    price: 1500,
    inStock: True,
    image: "ExoticShortHair.png",
    alt: "The Exotic Shorthair is similar to the Persian but with a short, plush coat and a sweet nature.",
  },

  {
    name: "Abyssinian",
    price: 1400,
    inStock: true,
    image: "Abyssinian.png",
    alt: "The Abyssinian cat has a ticked coat and an energetic, intelligent personality.",
  },
  {
    name: "Birman",
    price: 1600,
    inStock: true,
    image: "Birman.png",
    alt: "The Birman is a sacred-looking cat with deep blue eyes and white 'gloves' on its paws.",
  },
  {
    name: "Oriental Shorthair",
    price: 1300,
    inStock: true,
    image: "OrientalShorthair.png",
    alt: "The Oriental Shorthair is sleek and elegant, with large ears and a wide variety of coat colors.",
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
    alt: "The Turkish Van is known as the 'swimming cat,' famous for its love of water and semi-long fur.",
  },
  {
    name: "Manx",
    price: 1200,
    inStock: true,
    image: "Manx.png",
    alt: "The Manx is a tailless breed from the Isle of Man, known for its rounded appearance and playful nature.",
  },
];

function Catsale(cats) {
  let name = "Cat";
  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin", `<h1>${name}</h1>`);
}
