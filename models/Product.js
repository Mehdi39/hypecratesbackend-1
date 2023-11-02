const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: false,
    },
    sku: {
      type: String,
      required: false,
    },
    barcode: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: false,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: false,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: false,
    },
    image: {
      type: Array,
      required: false,
    },
    stock: {
      type: Number,
      required: false,
    },

    sales: {
      type: Number,
      required: false,
    },

    tag: [String],
    prices: {
      originalPrice: {
        type: Number,
        required: false,
      },
      price: {
        type: Number,
        required: false,
      },
      discount: {
        type: Number,
        required: false,
      },
    },
    variants: [{}],
    isCombination: {
      type: Boolean,
      required: false,
    },

    status: {
      type: String,
      default: "show",
      enum: ["show", "hide"],
    },
  },
  {
    timestamps: true,
  }
);

// module.exports = productSchema;

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
