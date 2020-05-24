class Api::HostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_hosts, only: [:show, :update, :destroy ]

  def index
    render json: current_user.hosts.all
  end
  
  def show
    render json: @host
  end

  def create
    host = current_user.hosts.new(host_params)
    if host.save
      render json: host
    else
      render json: host.errors, status: 422
    end
  end

  def update
    @host.update(host_params)
    render json: @host
  end

  def destroy
    @host.destroy
    render json: { message: 'Location deleted' }
  end

  private

  def set_host
    @host = current_user.hosts.find(params[:id])
  end

  def host_params
    params.require(:host).permit(:name, :open, :closed, :weekdays, :phone, :street_address, :city, :state, :zip, :country, :img)
  end

end
