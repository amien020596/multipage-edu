import phonenumbers
from phonenumbers import geocoder
phonenumber1 = phonenumbers.parse("+6281225754130")
print(geocoder.description_for_number(phonenumber1, 'en'))
