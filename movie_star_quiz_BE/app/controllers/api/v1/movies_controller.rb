module Api
  module V1
    class MoviesController < ApplicationController
      KEY = '304224988a0ac7a3ee5846cb961cbd95'

        def index
          if params[:actor]
            actor = HTTParty.get('https://api.themoviedb.org/3/search/person',:query =>
            {:api_key => KEY,
             :query => params[:actor] })
            if actor.parsed_response["results"].empty?
              actor = HTTParty.get('https://api.themoviedb.org/3/search/person',:query =>
              {:api_key => KEY,
               :query => "Liam Neeson" })
            end
              actorId = actor.parsed_response["results"].first["id"]
              movies = HTTParty.get('https://api.themoviedb.org/3/discover/movie',:query =>
              {:api_key => KEY,
               :with_cast => actorId })
              render json: movies.parsed_response
          else
            discover = HTTParty.get('https://api.themoviedb.org/3/discover/movie',:query =>
            {:api_key => KEY})
            render json: discover.parsed_response
          end
        end

    end
  end
end
