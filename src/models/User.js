const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    });
  
    return User;
  };
  
  module.exports = UserModel;

/*Se você usa MacOS
Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em PascalCase. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte link.

Os seguintes pontos serão avaliados:
[Será validado que existe o arquivo 'User.js']

[Será validado que o modelo possui o nome 'User']

[Será validado que o modelo possui a propriedade 'id']

[Será validado que o modelo possui a propriedade 'display_name']

[Será validado que o modelo possui a propriedade 'email']

[Será validado que o modelo possui a propriedade 'password']

[Será validado que o modelo possui a propriedade 'image'] */