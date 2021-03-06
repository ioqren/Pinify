class Api::BoardsController < ApplicationController
    def index
        @user = User.find_by(username: params[:user_id])
    end

    def create
        @board = Board.new(board_params)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: :unprocessable_entity
        end
    end

    def new
        @board = Board.new
    end

    def show
        @board = Board.find(params[:id])
    end

    def update
        @board = Board.find(params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @board = Board.find(params[:id])
        if @board.destroy
            redirect_to root_url
        else
            render json: {errors: "Cannot delete board"}, status: :unprocessable_entity
        end
    end

    private
    def board_params
        params.fetch(:board, {}).permit(:author_id, :title, pin_ids: [])
    end
end
