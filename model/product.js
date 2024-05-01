const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    screen: {
        type: {
            type: String,
            default: 'home'
        },
        title: {
            type: String,
            default: 'Product Details'
        },
        components: [{
            type: {
                type: String,
                required: true
            },
            source: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            style: {
                fontSize: {
                    type: Number,
                    default: 18
                },
                color: {
                    type: String,
                    default: '#333'
                }
            }
        }]
    },
    button: {
        type: {
            type: String,
            default: 'button'
        },
        label: {
            type: String,
            default: 'View Details'
        },
        action: {
            type: {
                type: String,
                default: 'navigate'
            },
            destination: {
                type: String,
                default: 'details_screen'
            }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
