#include <iostream>
#include <vector>

class C {
public:
    C() {
        std::cout << "C()\n";
    }

    C(const C&) {
        std::cout << "C(const C&)\n";
    }

    ~C() {
        std::cout << "~C()\n";
    }
};

void bar() {
    std::string s;
    double y;
    C z;

    throw 42; // deletes y and s
}

void foo(int x) {
    std::vector<int> v;
    try {
        bar();
    } catch (const std::string& s) {
        std::cout << "Exception: " << s << std::endl;
    } catch (int x) {
        std::cout << "Exception: " << x << std::endl;
    } catch (...) {
        std::cout << "Exception:\n";
    }
}

int main() {
    foo(17);
}
