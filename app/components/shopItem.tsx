import Image from 'next/image'
import { Button } from './button';

interface FlowerItem {
    Img: string;
    Name: string;
    price: number;
    inStock: boolean;
    sale?: number;
    label?: string;
    currency: string;
    onAddToCart: () => void
}


export default function ShopItem({
    Img,
    Name,
    price,
    inStock,
    sale,
    label,
    currency,
    onAddToCart
}: FlowerItem = {
        Img: '/placeholder.svg?height=200&width=200',
        Name: 'Sample Product',
        price: 19.99,
        currency: 'USD',
        inStock: true,
        onAddToCart: () => console.log('Add to cart clicked')
    }) {
    const stockLabel = !inStock ? "Out of Stock" : label

    return (
        <div className={`max-w-md mx-auto overflow-hidden  ${!inStock ? 'opacity-75' : ''}`}>
            <div className="relative">
                <Image
                    src={Img}
                    alt={Name}
                    width={400}
                    height={600}
                    className="w-full object-cover"
                />
                {stockLabel && (
                    <label
                        className={`absolute top-2 left-2 bg-labelbg text-white font-inter px-2 py-1 text-sm rounded-md ${!inStock ? 'bg-destructive text-destructive-foreground' : ''}`}
                    >
                        {stockLabel}
                    </label>
                )}
            </div>
            <div className="px-6 py-4  text-center">
                <h2 className="text-xl mb-2 text-card-foreground text-primaryText">{Name}</h2>
                <div className="flex items-center justify-center mb-4">
                    {sale ? (
                        <>
                            <span className="text-lg text-contentText flex-1">{sale.toFixed(2)} {currency}</span>
                            <span className="text-sm line-through text-muted-foreground text-contentText flex-1">{price.toFixed(2)} {currency}</span>
                        </>
                    ) : (
                        <span className="text-lg text-contentText">{price.toFixed(2)} {currency}</span>
                    )}
                </div>
                <Button
                    onClick={onAddToCart}
                    className="w-full"
                    disabled={!inStock}
                    variant={'secondary'}
                >
                    {inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
            </div>
        </div>
    )
}