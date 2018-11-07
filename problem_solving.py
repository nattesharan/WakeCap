number_of_transactions = input("Enter number of transactions: ")
transactions = []
for i in range(number_of_transactions):
    transactions.append(int(input("Enter transaction {}".format(i))))

equilibria_indexes = []

for i in range(number_of_transactions):
    if i == 0:
        lsum = transactions[i]
    else:
        lsum = sum(transactions[0:i])
    if i == number_of_transactions - 1:
        rsum = transactions[i]
    else:
        rsum = sum(transactions[i+1:])
    if lsum == rsum:
        equilibria_indexes.append(i)
print equilibria_indexes.join(' ')