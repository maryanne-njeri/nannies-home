class ReviewsController < ApplicationController

    def index 
        review = Review.all
        render json: review
    end

    def show 
        review = Review.find(params[:id])
        render json: review
    end

    def create 
        # byebug
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review
    end

    def destroy 
        review = Review.find(params[:id])
        review.destroy
        render json: {}
    end


    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:customer_id, :review)
    end

    def response_not_found
        render json: {error: "Personnel not found"}, status: :not_found
    end
end
