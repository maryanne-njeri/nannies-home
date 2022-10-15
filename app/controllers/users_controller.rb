class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]

    def index
        user = User.all 
        render json: user
    end

    def create
        user = User.new(user_params)
        if user.valid? && params[:password] == params[:password_confirmation]
            user.save!
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
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
        params.permit(:username, :password, :password_confirmation)
    end

    def response_not_found
        render json: {error: "Personnel not found"}, status: :not_found
    end

    
end
