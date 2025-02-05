'use client'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'

interface StarRatingProps {
  rating: number
  maxStars?: number
}

const StarRating = ({ rating, maxStars = 5 }: StarRatingProps) => {
  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, i) => (
        i < rating ? (
          <StarIcon
            key={i}
            className="h-6 w-6 text-yellow-500"
            data-testid="star-icon"
          />
        ) : (
          <StarOutline 
            key={i} 
            className="w-6 h-6 text-gray-300" 
            data-testid="star-icon-outline"
          />
        )
      ))}
    </div>
  )
}

export default StarRating 