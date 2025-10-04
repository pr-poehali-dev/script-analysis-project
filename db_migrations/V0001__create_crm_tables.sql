-- Создание таблиц для CRM-системы дропшиппинга

-- Таблица клиентов
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица товаров
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    supplier VARCHAR(255),
    category VARCHAR(100),
    image_url TEXT,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица заказов
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица позиций заказа
CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Вставка тестовых данных
INSERT INTO customers (name, email, phone) VALUES
('Алексей Петров', 'alex@example.com', '+7 900 123-45-67'),
('Мария Иванова', 'maria@example.com', '+7 900 234-56-78'),
('Дмитрий Сидоров', 'dmitry@example.com', '+7 900 345-67-89');

INSERT INTO products (name, description, price, supplier, category, stock) VALUES
('Умные часы Galaxy Watch', 'Премиальные смарт-часы с AMOLED дисплеем', 15990, 'TechSupplier Inc', 'Электроника', 50),
('Беспроводные наушники AirPods Pro', 'Активное шумоподавление, превосходный звук', 19990, 'AudioWorld', 'Аксессуары', 100),
('Фитнес-браслет Mi Band 7', 'Отслеживание активности 24/7', 3990, 'XiaomiSupply', 'Электроника', 200),
('Портативная колонка JBL Flip 6', 'Мощный звук, защита от воды IP67', 8990, 'SoundDirect', 'Аксессуары', 75),
('Powerbank 20000mAh', 'Быстрая зарядка, 2 USB порта', 2490, 'PowerSupply', 'Аксессуары', 150);

INSERT INTO orders (customer_id, total_amount, status) VALUES
(1, 35980, 'completed'),
(2, 3990, 'processing'),
(3, 11480, 'pending');

INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 15990),
(1, 2, 1, 19990),
(2, 3, 1, 3990),
(3, 4, 1, 8990),
(3, 5, 1, 2490);