class Api::VillainsController < ApplicationController
    before_action :set_villain, only: [:destroy, :show, :update]
    
    def index
        render json: Villain.all, include: [:henchmen]
    end

    def create
        @villain = Villain.new(set_params)
        if @villain.save
            @villain.henchmen.new(name: "Number 1", intel: 1)
            @villain.henchmen.new(name: "Number 2", intel: 2)
            ## since im not doing a henchmen controller i will seed dummy hemnchmen for new
            render json: @villain, include: [:henchmen]
        else
            render json: {errors: @villain.errors}, status: 422 
        end
    end

    def show
        render json: @villain, include: [:henchmen]
    end

    def update
        if @villain.update(set_params)
            render json: @villain, include: [:henchmen]
        else
            render json: {errors: @villain.errors}, status: 422 
        end
    end

    def destroy
        render json: @villain.destroy
    end

    private

    def set_params
        params.require(:villain).permit(:name, :health, :slogan, :evil)
    end

    def set_champ
        @villain = Villain.find(params[:id])
    end
end
