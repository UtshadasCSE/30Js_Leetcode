let hashDiscountCode = true;

function applyDiscountCode() {
  if (hashDiscountCode) {
    console.log("Applying discount code successfully");
    hashDiscountCode = false;
  } else {
    console.log("Discount code already applied");
  }
}

applyDiscountCode();
applyDiscountCode();
applyDiscountCode();
