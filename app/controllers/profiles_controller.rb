class ProfilesController < ApplicationController
    
    def index 
        profile = Profile.all
        render json: profile
    end

    def show 
        profile = Profile.find(params[:id])
        render json: profile
    end

    def create 
        # byebug
        profile = Profile.create(profile_params)
        render json: profile, status: :created
    end

    def update
        profile = find_profile
        profile.update!(profile_params)
        render json: profile
    end

    def destroy 
        profile = Profile.find(params[:id])
        profile.destroy
        render json: {}
    end


    private

    def find_profile
        Profile.find(params[:id])
    end

    def profile_params
        params.permit(:image_url, :biography, :years_experience, :secondary_phone_number, :secondary_email_address, :personnel_id, :rating)
    end

    def response_not_found
        render json: {error: "Personnel not found"}, status: :not_found
    end
end
