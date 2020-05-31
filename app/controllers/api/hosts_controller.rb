class Api::HostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_host, only: [:show, :edit, :destroy, :update]

  def index
    render json: current_user.hosts.all
  end
  
  def show
    render json: @host
  end

  def create
    host = current_user.hosts.new(host_params)
    file = params[:file]
    
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)

        host.img = cloud_image["secure_url"]
        
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
    
    if host.save
      render json: host
    else
      render json: { errors: host.errors.full_messages }, status: 422
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
    params.permit(:name, :open, :closed, :weekdays, :phone, :street_address, :city, :state, :zip, :country, :img)
  end

end
