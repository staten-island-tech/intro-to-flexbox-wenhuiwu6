const cats = [
  {
    name: "Maine Coon",
    price: 2000,
    inStock: true,
    img: "https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/NDowMDAwMDAwMDAwMDYyOTgx/silver-maine-coon.jpg",
    alt: "The Maine Coon is a large domesticated cat breed. One of the oldest natural breeds in North America, the breed originated in the U.S. state of Maine, where it is the official state cat. The Maine Coon is a large and social cat, commonly referred to as the gentle giant.",
  },

  {
    name: "British Shorthair",
    price: 1200,
    inStock: True,
    img: "https://www.catster.com/wp-content/uploads/2023/11/grey-and-white-british-shorthair-cat_Nynke-van-Holten_Shutterstock-e1720621991666.jpg",
    alt: "The British Shorthair is the pedigree version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the British Blue, with a solid grey-blue coat, copper-coloured eyes, and a medium-sized tail.",
  },

  {
    name: "Persian",
    price: 1500,
    inStock: True,
    img: "https://moderncat.com/wp-content/uploads/2025/03/ss_2510990453_Akifyeva-S-1-940x640.jpg",
    alt: "The Persian cat, also known as the Persian Longhair or simply Persian, is a long-haired traditional breed of cat characterised by a round face and petite, but not flat and not smashed in, muzzle.",
  },

  {
    name: "Siamese",
    price: 1000,
    inStock: True,
    img: "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg?w=3840&q=75&auto=format",
    alt: "The Siamese cat is one of the first distinctly recognised breeds of Asian cat. It derives from the Wichianmat landrace. The Siamese cat is one of several varieties of cats native to Thailand. The original Siamese became one of the most popular breeds in Europe and North America in the 19th century",
  },

  {
    name: "Bengal",
    price: 1800,
    inStock: True,
    img: "https://consumer-cms.petfinder.com/sites/default/files/images/content/Bengal%204.jpg",
    alt: "The Bengal cat is a breed of hybrid cat created from crossing of an Asian leopard cat with domestic cats, especially the spotted Egyptian Mau.",
  },

  {
    name: "Sphynx",
    price: 3000,
    inStock: True,
    img: "https://i.guim.co.uk/img/media/6bddcc4d11116c1d28a452023ad5523012b2f572/146_619_4372_2623/master/4372.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=62620d518227d5e74123cfc09645de10",
    alt: "The Sphynx cat also known as the Canadian Sphynx, is a breed of cat known for its lack of fur. Hairlessness in cats is a naturally occurring genetic mutation, and the Sphynx was developed through selective breeding of these animals, starting in the 1960s.",
  },

  {
    name: "Siberian",
    price: 1700,
    inStock: True,
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Murmur%27s_Siberian_Cat_siberiano_golden_%28cropped%29.JPG",
    alt: "The Siberian is a centuries-old landrace of domestic cat in Russia, and recently developed as a formal breed with standards promulgated the world over since the late-1980s. Since 2006, the breed is recognised for registry and championship status with all major cat registries.",
  },

  {
    name: "Norwegian Forest",
    price: 2000,
    inStock: True,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNYDK2kc57_dqnV1CUwyyexggV5ciY0eF5RF5vBKRkEF8ZmSbvbkv7nxII9EBwJ4mEIbggIfd8Pecb_yB90hiUmvlkCNweoiyFA__Sjw",
    alt: "The Norwegian Forest Cat is a breed of domestic cat originating in Northern Europe. This landrace breed is adapted to a very cold climate, with a top coat of long, glossy hair and a woolly undercoat for insulation.",
  },

  {
    name: "Domestic Shorthair",
    price: 300,
    inStock: True,
    img: "https://consumer-cms.petfinder.com/sites/default/files/images/content/Domestic%20Shorthair%20Cat%204.jpg",
    alt: "A moggy is any cat which has not been intentionally bred. Moggies lack a consistent appearance unlike purebred cats that are selectively bred for appearance conforming to a standard.",
  },

  {
    name: "Ragdoll",
    price: 2200,
    inStock: True,
    img: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/07/ragdoll-kitten.webp",
    alt: "The Ragdoll is a breed of cat with a distinct colorpoint coat and blue eyes. Its morphology is large and weighty, and it has a semi-long and silky soft coat. American breeder Ann Baker developed Ragdolls in the 1960s. They are best known for their docile, placid temperament and affectionate nature.",
  },

  {
    name: "Felis Catus",
    price: 1300,
    inStock: True,
    img: "https://inaturalist-open-data.s3.amazonaws.com/photos/294212361/original.jpg",
    alt: "The cat, also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.",
  },

  {
    name: "Scottish Fold",
    price: 2000,
    inStock: True,
    img: "https://www.catster.com/wp-content/uploads/2023/11/Scottish-Fold-Cat-laying-on-a-couch_Alexander-Sobol_Shutterstock-800x534.jpg",
    alt: "The Scottish Fold is a distinctive breed of domestic cat characterised by a natural dominant gene mutation associated with osteochondrodysplasia.",
  },

  {
    name: "Cheetoh",
    price: 4000,
    inStock: True,
    img: "https://ygo-assets-entities-emea.yougov.net/b5fa9704-d028-11eb-a339-2fe1f0156679.jpg",
    alt: "He Cheetoh cat is a hybrid of Bengal and Ocicat breeds, known for its spotted coat and wild look.",
  },

  {
    name: "Exotic Short Hair",
    price: 1500,
    inStock: True,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Ginger_Exotic_Shorthair.jpg/800px-Ginger_Exotic_Shorthair.jpg",
    alt: "The Exotic Shorthair is similar to the Persian but with a short, plush coat and a sweet nature.",
  },

  {
    name: "Abyssinian",
    price: 1400,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Abyssinian_2.jpg",
    alt: "The Abyssinian cat has a ticked coat and an energetic, intelligent personality.",
  },
  {
    name: "Birman",
    price: 1600,
    inStock: true,
    img: "https://cdn.britannica.com/77/235277-050-0176FA60/Birman-cat.jpg",
    alt: "The Birman is a sacred-looking cat with deep blue eyes and white 'gloves' on its paws.",
  },
  {
    name: "Oriental Shorthair",
    price: 1300,
    inStock: true,
    img: "https://cdn.britannica.com/09/233209-050-406B2AFB/Oriental-Shorthair-cat.jpg",
    alt: "The Oriental Shorthair is sleek and elegant, with large ears and a wide variety of coat colors.",
  },
  {
    name: "Savannah",
    price: 5000,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Savannah_Cat_closeup.jpg",
    alt: "The Savannah is a tall, spotted hybrid cat from a cross between a serval and domestic cat.",
  },
  {
    name: "Turkish Van",
    price: 1800,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Turkish_Van_Cat.jpg",
    alt: "The Turkish Van is known as the 'swimming cat,' famous for its love of water and semi-long fur.",
  },
  {
    name: "Manx",
    price: 1200,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Manx_cat_by_Lucy_Bowring.jpg",
    alt: "The Manx is a tailless breed from the Isle of Man, known for its rounded appearance and playful nature.",
  },
];

function injectAll(items) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  items.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="cat-card">
        <img src="${item.img}" alt="${item.alt}" class="cat-img">
        <h2>${item.name}</h2>
        <p class="price">Price: $${item.price}</p>
        <p>${item.alt}</p>
        <p class="${item.inStock ? "stock" : "out-of-stock"}">
          ${item.inStock ? "In stock" : "Out of stock"}
        </p>
      </div>
      `
    );
  });
}
injectAll(cats);
