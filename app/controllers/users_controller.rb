class UsersController < ApplicationController

    def index
        user = User.all 
        render json: user
    end

    def show 
        user = User.find(params[:id])
        render json: user
    end


    def create 
        # byebug
        user = User.create(user_params)
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy
        render json: {}
    end


    private

    def find_user 
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password)
    end

    def response_not_found
        render json: {error: "Personnel not found"}, status: :not_found
    end

    
end
