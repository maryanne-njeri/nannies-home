class PersonnelsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        personnel = Personnel.all
        render json: personnel
    end

    def show 
        personnel = Personnel.find(params[:id])
        render json: personnel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    end

    def create
        # byebug
        personnel = Personnel.create(personnel_params)
        render json: personnel, status: :created
    end

    def update
        personnel = find_personnel
        personnel.update!(personnel_params)
        render json: personnel
    end

    def destroy 
        personnel = Personnel.find(params[:id])
        personnel.destroy
        render json: {}
    end


        private

    def find_personnel 
        Personnel.find(params[:id])
    end

    def personnel_params
        params.permit(:first_name, :last_name, :sex, :age, :hourly_billing_rate, :primary_email_address, :primary_phone_number)
    end

    def response_not_found
        render json: {error: "Personnel not found"}, status: :not_found
    end

end
