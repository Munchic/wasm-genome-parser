#include <iostream>
#include <memory>

int main() {
    auto smth = new int(64);

    std::unique_ptr<int> somePtr(smth);

    int newValue;
    std::cin >> newValue;
    *somePtr = newValue;

    std::unique_ptr<int> anotherPtr = std::move(somePtr);

    std::cout << *anotherPtr.get() << std::endl;
}
