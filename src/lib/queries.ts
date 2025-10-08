
// 1️⃣ Gourmet Gifts
export const GET_GOURMET_GIFTS = `
  query GetAllGourmetGifts {
    gourmetGifts: gourmet_Gifts(stage: PUBLISHED) {
      id
      title
      description
      price
      image {
        id
        url
        width
        height
      }
    }
  }
`;

// 2️⃣ Dry Fruit Gifts
export const GET_DRY_FRUIT_GIFTS = `
  query GetAllDryFruitGifts {
    dryFruitGifts: dryFruit_Gifts(stage: PUBLISHED) {
      id
      title
      description
      price
      image {
        id
        url
        width
        height
      }
    }
  }
`;

// 3️⃣ Premium Diwali Gifts
export const GET_PREMIUM_DIWALI_GIFTS = `
  query GetAllPremiumDiwaliGifts {
    premiumDiwaliGifts(stage: PUBLISHED) {
      id
      title
      description
      price
      image {
        id
        url
        width
        height
      }
    }
  }
`;

// 4️⃣ Decor Diya Gifts
export const GET_DECOR_DIYA_GIFTS = `
  query GetAllDecorDiyaGifts {
    decorDiyaGifts(stage: PUBLISHED) {
      id
      title
      description
      price
      image {
        id
        url
        width
        height
      }
    }
  }
`;
