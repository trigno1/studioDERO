export const GET_GOURMET_GIFTS = `
  query GetGourmetGifts {
    gourmetGifts {
      id
      title
      description
      price
      slug
      image {
        id
        url
        width
        height
      }
    }
  }
`;

export const GET_DRY_FRUIT_GIFTS = `
  query GetDryFruitGifts {
    dryFruitGifts {
      id
      title
      description
      price
      slug
      image {
        id
        url
        width
        height
      }
    }
  }
`;

export const GET_PREMIUM_DIWALI_GIFTS = `
  query GetPremiumDiwaliGifts {
    premiumDiwaliGifts {
      id
      title
      description
      price
      slug
      image {
        id
        url
        width
        height
      }
    }
  }
`;

export const GET_DECOR_DIYA_GIFTS = `
  query GetDecorDiyaGifts {
    decorDiyaGifts {
      id
      title
      description
      price
      slug
      image {
        id
        url
        width
        height
      }
    }
  }
`;
