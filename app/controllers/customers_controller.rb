class CustomersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def index
        customer = Customer.all
        render json: customer
    end

    def show 
        customer = Customer.find(params[:id])
        render json: customer
    end

    def create 
        customer = Customer.create(customer_params)
        render json: customer, status: :created
    end

    def update
        customer = find_customer
        customer.update!(customer_params)
        render json: customer
    end

    def destroy 
        customer = Customer.find(params[:id])
        customer.destroy
        render json: {}
    end


    private

    def find_customer 
        Customer.find(params[:id])
    end

    def customer_params
        params.permit(:first_name, :last_name, :phone_number, :email_address, :user_id)
    end

    def response_not_found
        render json: {error: "Customer not found"}, status: :not_found
    end
    
end
