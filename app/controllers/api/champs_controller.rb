class Api::ChampsController < ApplicationController

    before_action :set_champ, only: [:destroy, :show, :update]
    
    def index
        render json: Champ.all, include: [:moves]
    end

    def create
        @champ = Champ.new(set_params)
        if @champ.save
            render json: @champ
        else
            render json: {errors: @champ.errors}, status: 422 # :unprocessable_entity
        end
    end

    def show
        render json: @champ
    end

    def update
        if @champ.update(set_params)
            render json: @champ
        else
            render json: {errors: @champ.errors}, status: 422 ## I only have these if i want to do error handling and validations
        end
    end

    def destroy
        render json: @champ.destroy
    end

    private

    def set_params
        params.require(:champ).permit(:name, :health, :power, :align)
    end

    def set_champ
        @champ = Champ.find(params[:id])
    end

end
