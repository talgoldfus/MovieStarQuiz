module Api
  module V1
    class ActorsController < ApplicationController
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
               defaulted = true
            elsif actor.parsed_response["results"].length > 1 && actor.parsed_response["results"].first["name"].downcase != params[:actor].downcase
               render status: 404
            end
              actorId = actor.parsed_response["results"].first["id"]
              movies = HTTParty.get('https://api.themoviedb.org/3/discover/movie',:query =>
              {:api_key => KEY,
               :with_cast => actorId })
              render json: {movies: movies.parsed_response , actor: actor , defaulted: defaulted}
          else
            popular = HTTParty.get('https://api.themoviedb.org/3/person/popular',:query =>
            {:api_key => KEY})
            render json: popular.parsed_response
          end
        end

    end
  end
end
