class Share < ActiveRecord::Base
  attr_accessible :post_id, :user_id
	validates_uniqueness_of :post_id, :scope => :user_id
	
  def self.post_user_share(post, user)
    find(:first, :conditions => {:post_id => post, :user_id => user})
  end
end
