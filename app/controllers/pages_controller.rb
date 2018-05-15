class PagesController < ApplicationController
  def home
    @skills = []
    @interests = ["surfboard.png", "film.png", "headphone-symbol.png", "sushi.png", "vinyl.png", "hockey.png"]
  end
end
