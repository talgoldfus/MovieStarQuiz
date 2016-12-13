module Api
  module V1
    class ActorsController < ApplicationController
      KEY = '304224988a0ac7a3ee5846cb961cbd95'

        def index
          if params[:actor]
            actor = HTTParty.get('https://api.themoviedb.org/3/search/person',:query => {
             :api_key => KEY,
             :query => params[:actor]
             })
            render json: actor.parsed_response
          end
        end

    end
  end
end
