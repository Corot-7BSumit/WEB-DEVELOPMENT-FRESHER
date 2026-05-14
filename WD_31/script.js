let i;
for (i = 0; i < 5; i++) {
    console.log(i)

}
while (i >= 0) {
    if (i == 2) {
        i--
        continue
    }
    else {
        console.log(i)
        i--
    }
}