item_list = [1,2,3,4,5,6]

def swap_to_center(item_list):
    new_list = []
    for item_index in range(0, int(len(item_list)/2+len(item_list)%2)):
        flip_index = -(item_index+1)
        if (item_index % 2 == 0):
            new_list.insert(item_index, item_list[item_index])
            new_list.insert(flip_index, item_list[flip_index])
        else:
            new_list.insert(item_index, item_list[flip_index])
            new_list.insert(flip_index, item_list[item_index])

    return new_list

print(swap_to_center(item_list))