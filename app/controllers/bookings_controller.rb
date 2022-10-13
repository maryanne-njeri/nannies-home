class BookingsController < ApplicationController
    
    def index
        booking = Booking.all
        render json: booking
    end

    # def create
    #     booking = Booking.create(
    #         personnel_id: params[:personnel_id],
    #         customer_id: params[:customer_id], 
    #         # starts datetime
    #     # ends datetime
    #     # notes text
    #         fulfilled: params[:fulfilled])
    #     render json: booking, status: :created
    # end

    def create 
        # byebug
        booking = Booking.create(booking_params)
        render json: booking, status: :created
    end

    def update
        booking = find_booking
        booking.update!(booking_params)
        render json: booking
    end

    def destroy 
        booking = Booking.find(params[:id])
        booking.destroy
        render json: {}
    end


    private

    def find_booking
        Personnel.find(params[:id])
    end

    def booking_params
        params.permit(:personnel_id, :customer_id, :date, :time, :fulfilled)
    end

    def response_not_found
        render json: {error: "Personnel not found"}, status: :not_found
    end

end
