import hashlib
import requests

#Fungsi enkripsi string menggunakan teknik SHA256
def encrypt_string(hash_string):
  sha_signature = hashlib.sha256(hash_string.encode()).hexdigest()
  return sha_signature

#fungsi pencarian nonce
def cari_nonce(hash,pola,panjangPola):
  i = 0
  hasilPola = 'pola dummy'
  #loop while selama hasilPola tidak sama dengan pola
  while hasilPola != pola:
    strValueOfInt =  hash + str(i)
    newHash = encrypt_string(strValueOfInt)
    hasilPola = newHash[:panjangPola]
    i += 1
  print(newHash)
  return str(i-1)

hash_1 = "ebb6a95e9f04230dec346553e9c0e10bdc5e700c46bd2a05aa31c8192cb8c422"
pola_1 = "1"
panjang_pola_1 = 1

hash_2 = "7ec3646b7438861734b7ce82dadbc286f96099c42c7e91eba9a5f7985a71dbfd"
pola_2 = "11"
panjang_pola_2 = 2

hash_3 = "26f016adf9c6002b2abd901cc1621a38bf82feadf92a4568e04e94afbf09b9b2"
pola_3 = "111"
panjang_pola_3 = 3

nonce_1 = cari_nonce(hash_1,pola_1,panjang_pola_1)
nonce_2 = cari_nonce(hash_2,pola_2,panjang_pola_2)
nonce_3 = cari_nonce(hash_3,pola_3,panjang_pola_3)
# print(oawkkowa)
print('nonce 1 = ',nonce_1)
print('nonce 2 = ',nonce_2)
print('nonce 3 = ',nonce_3)

nim = '1301200000'
queryParams ="?nim="+nim+"&nonce_1="+nonce_1+"&nonce_2="+nonce_2+"&nonce_3="+nonce_3
response = requests.post("http://localhost:3000/sendhash"+queryParams) 
print("http://localhost:3000/sendhash"+queryParams)
print('status nonce 1 :',response.json().get('status_nonce_1'))
print('status nonce 2 :',response.json().get('status_nonce_2'))
print('status nonce 3 :',response.json().get('status_nonce_3'))
print('status_tugas :', response.json().get('status'))
print(response.json().get('message'))
