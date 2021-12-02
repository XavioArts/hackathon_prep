class Api::MovesController < ApplicationController

    before_action :set_champ
    before_action :set_move, only: [:destroy, :show, :update]
    
    def index
        render json: @champ.moves 
    end

    def create
        @move = @champ.moves.new(set_params)
        if @move.save
            render json: @move
        else
            render json: {errors: @move.errors}, status: 422 # :unprocessable_entity
        end
    end

    def show
        render json: @move
    end

    def update
        if @move.update(set_params)
            render json: @move
        else
            render json: {errors: @move.errors}, status: 422 ## I only have these if i want to do error handling and validations
        end
    end

    def destroy
        render json: @move.destroy
    end

    private

    def set_params
        params.require(:move).permit(:name, :desc, :dmg, :element)
    end

    def set_move
        @move = @champ.moves.find(params[:id]) 
    end

    def set_champ
        @champ = Champ.find(params[:champ_id])
    end
end
