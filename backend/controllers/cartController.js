import User from "../models/userModel.js";

// add item to user cart
export const addtoCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const cart = user.cart;

    if (cart.has(itemId)) {
      cart.set(itemId, cart.get(itemId) + 1);
    } else {
      cart.set(itemId, 1);
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Item added to cart",
      cart,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error while adding to cart",
    });
  }
};


// remove item from user cart
export const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        // find user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const cart = user.cart;

        // decrease quantity
        if (cart.has(itemId)) {
            const quantity = cart.get(itemId);

            if (quantity > 1) {
                cart.set(itemId, quantity - 1);
            } else {
                // remove item if quantity becomes 0
                cart.delete(itemId);
            }
        }

        // save changes
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Item removed from cart",
            cart,
        });

    } catch (err) {
        console.error("Remove from cart error:", err.message);
        return res.status(500).json({
            success: false,
            message: "Error while removing cart item",
        });
    }
};


// fetch user cart data
export const getCart = async (req, res) => {
  try {
    // console.log(req.user.userId)
    const { userId } = req.body;

    // find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Fetched user cart data",
      cart: user.cart,
    });

  } catch (err) {
    console.error("Error while fetching user cart data:", err.message);
    return res.status(500).json({
      success: false,
      message: "Error while fetching user cart data",
    });
  }
};
