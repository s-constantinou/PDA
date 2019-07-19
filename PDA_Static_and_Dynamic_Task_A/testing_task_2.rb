### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  # Initialise function here
  # def initialize(cards)
  #   @cards = cards
  # end


  def self.check_for_ace(card)  # fixed name, declared class method
    if card.value == 1 # fixed ==
      return true
    else
      return false
    end
  end

  def self.highest_card(card1, card2) # fixed def & added comma between parameters
    if card1.value > card2.value
      return card1 # no name property and missing 1 from card
    else
      return card2 # now a return statement
    end
  end

def self.cards_total(cards)
  total = 0 # added = 0 to initialise
  for card in cards
    total += card.value
  end
  return "You have a total of " + total.to_s # moved outside loop, added space & conversion to string
end

end # moved to end of file
